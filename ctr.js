<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>CTR v4 • HRD Panel</title>
  <link rel="stylesheet" href="style.css">
  <script defer src="ctr.js"></script>
  <script>document.addEventListener('DOMContentLoaded', ()=>{ CTR.init(); });</script>
</head>
<body>
  <header class="topbar">
    <a href="index.html" class="badge">← Home</a>
    <div class="brand">HRD Panel</div>
  </header>

  <main class="wrap">
    <section class="card">
      <h3>เข้าสู่ระบบ HRD</h3>
      <div class="row">
        <input id="pin" class="input" type="password" placeholder="PIN (เริ่มต้น 1234)">
        <button class="btn" onclick="CTR.loginHRD()">ยืนยัน</button>
        <span id="p_msg" class="small"></span>
      </div>
    </section>

    <section id="hrd_area" style="display:none">
      <div class="grid-2" style="margin-top:10px">
        <div class="card"><h3>Trainers</h3><button class="btn ghost" onclick="CTR.adminOpen('trainers')">เปิด</button></div>
        <div class="card"><h3>Courses</h3><button class="btn ghost" onclick="CTR.adminOpen('courses')">เปิด</button></div>
        <div class="card"><h3>Sessions</h3><button class="btn ghost" onclick="CTR.adminOpen('sessions')">เปิด</button></div>
        <div class="card"><h3>Bookings</h3><button class="btn ghost" onclick="CTR.adminOpen('bookings')">เปิด</button></div>
        <div class="card"><h3>Ratings</h3><button class="btn ghost" onclick="CTR.adminOpen('ratings')">เปิด</button></div>
        <div class="card"><h3>Admin (PIN/Backup)</h3><button class="btn ghost" onclick="CTR.adminOpen('admin')">เปิด</button></div>
      </div>
      <section class="note small" style="margin-top:10px">
        เวอร์ชัน proxy: ปุ่มทั้งหมดจะทำ CRUD ผ่านปลายทาง Power Automate/Function
      </section>
    </section>
  </main>

  <footer class="footer">© CTR v4 • HRD</footer>
</body>
</html>
