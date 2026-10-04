import sys
p = sys.argv[1]
s = open(p, encoding='utf-8').read()
if 'qrcode(0' in s:
    print('Already patched'); sys.exit(0)

# 1) QR library
tag = '<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>'
if tag not in s:
    print('NOT FOUND: firebase script tag'); sys.exit(1)
s = s.replace(tag,
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>\n' + tag, 1)

# 2) new generateImage
NEW = r"""function generateImage(data, qNum, action){
    showToast('Generating image...');
    loadLogo().then(function(logo){ renderCard(data, qNum, action, logo); });
  }

  const LOGO_SRC = 'logo-circle.png';
  let _logoP = null;
  function loadLogo(){
    if (!_logoP){
      _logoP = new Promise(function(res){
        const im = new Image();
        im.onload = function(){ res(im); };
        im.onerror = function(){ res(null); };
        im.src = LOGO_SRC;
      });
    }
    return _logoP;
  }

  function renderCard(data, qNum, action, logo){
    const displayUrl = getDisplayUrl(qNum);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const W = 1080, PAD = 64, S = 2;
    const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

    const GOLD = '#6ea8fe', NAVY = '#1a1d23', NAVY2 = '#1e222a', CARD = '#1f232a';
    const LINE = '#333843', BLUE_L = '#9cc3ff', TXT = '#e4e6eb', TXT2 = '#e4e6eb', DIM = '#a0a6b1';
    const Q_FONT = '700 54px ' + FONT;
    const OPT_FONT = '500 40px ' + FONT;

    function rr(x, y, w, h, r){
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    }
    function spacing(px){ if ('letterSpacing' in ctx) ctx.letterSpacing = px + 'px'; }
    function fit(txt, weight, size, maxW){
      let f = size;
      ctx.font = weight + ' ' + f + 'px ' + FONT;
      while (ctx.measureText(txt).width > maxW && f > 18){ f--; ctx.font = weight + ' ' + f + 'px ' + FONT; }
    }

    // logo: white disc + logo-circle.png (clipped) + blue ring
    function drawLogo(cx, cy, size, ringW){
      const r = size / 2;
      ctx.save();
      ctx.shadowColor = 'rgba(110,168,254,0.35)'; ctx.shadowBlur = 26;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      if (logo){
        ctx.save();
        ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
        ctx.drawImage(logo, cx - r, cy - r, size, size);
        ctx.restore();
      } else {
        ctx.fillStyle = '#0C2646'; ctx.font = '800 ' + Math.round(size * 0.5) + 'px ' + FONT;
        ctx.textAlign = 'center'; ctx.fillText('R', cx, cy + 2);
      }
      ctx.strokeStyle = GOLD; ctx.lineWidth = ringW;
      ctx.beginPath(); ctx.arc(cx, cy, r + ringW * 2 + 3, 0, Math.PI * 2); ctx.stroke();
    }

    // ---- measure ----
    const cardW = W - PAD * 2;
    const optTextX = 128, optMaxW = cardW - optTextX - 32;
    const qLines = wrapText(ctx, data.question, W - PAD * 2, Q_FONT);
    const optLines = data.options.map(o => wrapText(ctx, o, optMaxW, OPT_FONT));
    const headerH = 200;
    const optHs = optLines.map(l => Math.max(l.length * 54 + 56, 112));
    const ctaH = 316;

    const H = headerH + 64 + 44 + qLines.length * 76 + 44
            + optHs.reduce((s, h) => s + h + 22, 0) + 18
            + ctaH + 44 + 116 + 44;

    canvas.width = W * S; canvas.height = H * S;
    ctx.scale(S, S);
    ctx.textBaseline = 'middle';

    // ---- background ----
    ctx.fillStyle = NAVY; ctx.fillRect(0, 0, W, H);
    let g = ctx.createRadialGradient(W - 80, headerH + 120, 20, W - 80, headerH + 120, 560);
    g.addColorStop(0, 'rgba(110,168,254,0.10)'); g.addColorStop(1, 'rgba(110,168,254,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    g = ctx.createRadialGradient(40, H - 240, 20, 40, H - 240, 520);
    g.addColorStop(0, 'rgba(76,141,246,0.12)'); g.addColorStop(1, 'rgba(76,141,246,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // ---- header ----
    g = ctx.createLinearGradient(0, 0, W, headerH);
    g.addColorStop(0, '#232833'); g.addColorStop(1, NAVY2);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, headerH);
    g = ctx.createLinearGradient(0, 0, W, 0);
    g.addColorStop(0, 'rgba(110,168,254,0)'); g.addColorStop(0.5, GOLD); g.addColorStop(1, 'rgba(110,168,254,0)');
    ctx.fillStyle = g; ctx.fillRect(0, headerH - 3, W, 3);

    const lcx = PAD + 74, lcy = headerH / 2 - 1;
    drawLogo(lcx, lcy, 124, 3);

    const tx = lcx + 62 + 34;
    ctx.textAlign = 'left';
    spacing(5); ctx.fillStyle = GOLD; ctx.font = '700 19px ' + FONT;
    ctx.fillText('SPECIAL DESIGN BY RPREP', tx, lcy - 46);
    spacing(0); ctx.font = '800 46px ' + FONT; ctx.fillStyle = TXT;
    ctx.fillText('Digital ', tx, lcy - 6);
    ctx.fillStyle = GOLD;
    ctx.fillText('QBank', tx + ctx.measureText('Digital ').width, lcy - 6);
    ctx.fillStyle = DIM; ctx.font = '400 25px ' + FONT;
    ctx.fillText('Government Nursing Exams', tx, lcy + 40);

    // Q badge (filled)
    const qTxt = 'Q' + qNum;
    ctx.font = '800 38px ' + FONT;
    const bw = ctx.measureText(qTxt).width + 64;
    ctx.fillStyle = GOLD; rr(W - PAD - bw, lcy - 33, bw, 66, 33); ctx.fill();
    ctx.fillStyle = NAVY; ctx.textAlign = 'center';
    ctx.fillText(qTxt, W - PAD - bw / 2, lcy + 1);
    ctx.textAlign = 'left';

    // ---- question ----
    let y = headerH + 64;
    ctx.fillStyle = GOLD; ctx.fillRect(PAD, y - 2, 56, 4);
    ctx.font = '700 24px ' + FONT; spacing(5);
    ctx.fillText('QUESTION', PAD + 76, y);
    spacing(0);
    y += 44;
    ctx.fillStyle = TXT; ctx.font = Q_FONT;
    qLines.forEach((line, i) => ctx.fillText(line, PAD, y + i * 76 + 38));
    y += qLines.length * 76 + 44;

    // ---- options ----
    optLines.forEach((lines, i) => {
      const h = optHs[i];
      ctx.fillStyle = CARD; rr(PAD, y, cardW, h, 28); ctx.fill();
      ctx.strokeStyle = LINE; ctx.lineWidth = 2; rr(PAD, y, cardW, h, 28); ctx.stroke();

      const cx = PAD + 66, cy = y + h / 2;
      const bg = ctx.createLinearGradient(cx - 34, cy - 34, cx + 34, cy + 34);
      bg.addColorStop(0, '#9cc3ff'); bg.addColorStop(1, '#4a8ce0');
      ctx.fillStyle = bg;
      ctx.beginPath(); ctx.arc(cx, cy, 34, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = NAVY; ctx.font = '800 32px ' + FONT; ctx.textAlign = 'center';
      ctx.fillText(LETTERS[i], cx, cy + 1);

      ctx.textAlign = 'left';
      ctx.fillStyle = TXT2; ctx.font = OPT_FONT;
      const startY = cy - ((lines.length - 1) * 54) / 2;
      lines.forEach((line, k) => ctx.fillText(line, PAD + optTextX, startY + k * 54 + 1));
      y += h + 22;
    });
    y += 18;

    // ---- CTA card ----
    g = ctx.createLinearGradient(PAD, y, W - PAD, y + ctaH);
    g.addColorStop(0, '#232833'); g.addColorStop(1, NAVY2);
    ctx.save();
    ctx.shadowColor = 'rgba(110,168,254,0.22)'; ctx.shadowBlur = 34;
    ctx.fillStyle = g; rr(PAD, y, cardW, ctaH, 34); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = GOLD; ctx.lineWidth = 3; rr(PAD, y, cardW, ctaH, 34); ctx.stroke();

    const leftW = cardW - 40 - 236 - 24 - 40;
    ctx.textAlign = 'left';

    // line 1: magnifier + title (one line)
    const ty = y + 92, ix = PAD + 58;
    ctx.strokeStyle = GOLD; ctx.lineWidth = 5; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.arc(ix - 4, ty - 4, 13, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(ix + 6, ty + 6); ctx.lineTo(ix + 17, ty + 17); ctx.stroke();
    ctx.fillStyle = GOLD;
    fit('Answer + Explanation dekho', '800', 42, leftW - 50);
    ctx.fillText('Answer + Explanation dekho', PAD + 90, ty);

    // line 2
    ctx.fillStyle = DIM;
    fit('QR code scan karke Answer dekhe', '400', 28, leftW);
    ctx.fillText('QR code scan karke Answer dekhe', PAD + 40, y + 150);

    // line 3: URL box
    const ux = PAD + 40, uy = y + 184, uh = 76;
    ctx.fillStyle = NAVY; rr(ux, uy, leftW, uh, 22); ctx.fill();
    ctx.strokeStyle = LINE; ctx.lineWidth = 2; rr(ux, uy, leftW, uh, 22); ctx.stroke();
    const gx = ux + 42, gy = uy + uh / 2;
    ctx.strokeStyle = BLUE_L; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.arc(gx, gy, 16, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(gx, gy, 6.5, 16, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(gx - 16, gy); ctx.lineTo(gx + 16, gy); ctx.stroke();
    ctx.fillStyle = BLUE_L;
    fit(displayUrl, '700', 34, leftW - 90);
    ctx.fillText(displayUrl, ux + 78, gy + 1);

    // QR (unique per question)
    const qrBox = 236;
    const qx = PAD + cardW - 40 - qrBox, qy = y + (ctaH - qrBox) / 2;
    ctx.fillStyle = '#ffffff'; rr(qx, qy, qrBox, qrBox, 28); ctx.fill();
    try {
      const qr = qrcode(0, 'M');
      qr.addData(getShareUrl(qNum));
      qr.make();
      const n = qr.getModuleCount();
      const cell = Math.floor((qrBox - 40) / n);
      const off = (qrBox - cell * n) / 2;
      ctx.fillStyle = '#0b1220';
      for (let r = 0; r < n; r++){
        for (let c = 0; c < n; c++){
          if (qr.isDark(r, c)) ctx.fillRect(qx + off + c * cell, qy + off + r * cell, cell, cell);
        }
      }
    } catch (e) {
      ctx.fillStyle = '#0b1220'; ctx.font = '700 24px ' + FONT; ctx.textAlign = 'center';
      ctx.fillText('rprep.online/?q=' + qNum, qx + qrBox / 2, qy + qrBox / 2);
      ctx.textAlign = 'left';
    }

    y += ctaH + 44;

    // ---- footer ----
    drawLogo(W / 2, y + 34, 64, 2);
    ctx.fillStyle = '#7d8696'; ctx.font = '500 24px ' + FONT; ctx.textAlign = 'center';
    spacing(4);
    ctx.fillText('NORCET  ·  RRB  ·  ESIC  ·  DSSSB', W / 2, y + 116);
    spacing(0);

    ctx.strokeStyle = LINE; ctx.lineWidth = 3;
    ctx.strokeRect(1.5, 1.5, W - 3, H - 3);

    // ---- export ----
    canvas.toBlob(function(blob){
      if (!blob){ showToast('Image failed'); return; }
      if (action === true){
        const url = URL.createObjectURL(blob);
        sharePreviewImg.src = url;
        sharePreviewFull.style.display = 'block';
        sharePreviewFull.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(function(){ URL.revokeObjectURL(url); }, 60000);
        showToast('Preview ready');
        return;
      }
      const file = new File([blob], 'rprep-q' + qNum + '.png', { type: 'image/png' });
      if (action === 'share' && navigator.canShare && navigator.canShare({ files: [file] })){
        navigator.share({ files: [file], title: 'RPrep Q' + qNum, text: buildShareText(data, qNum) })
          .then(function(){ closeShareModal(); })
          .catch(function(err){ if (err.name !== 'AbortError') downloadImage(blob, qNum); });
      } else {
        downloadImage(blob, qNum);
        closeShareModal();
      }
    }, 'image/png');
  }

  """
if 'function generateImage(' not in s or 'function downloadImage(' not in s:
    print('NOT FOUND: generateImage / downloadImage'); sys.exit(1)
a = s.index('function generateImage(')
b = s.index('function downloadImage(')
s = s[:a] + NEW + s[b:]

open(p, 'w', encoding='utf-8').write(s)
print('ALL DONE')
