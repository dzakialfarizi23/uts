import React from 'react';
import { FileDown } from 'lucide-react';

export default function UTSSistemOperasi() {
  const generatePDF = () => {
    const content = document.getElementById('pdf-content');
    const printWindow = window.open('', '', 'height=800,width=800');
    
    printWindow.document.write(`
      <html>
        <head>
          <title>UTS Sistem Operasi</title>
          <style>
            body {
              font-family: 'Times New Roman', serif;
              line-height: 1.6;
              margin: 40px;
              color: #333;
            }
            h1 {
              text-align: center;
              color: #2c3e50;
              margin-bottom: 30px;
              font-size: 24px;
            }
            h2 {
              color: #34495e;
              margin-top: 25px;
              margin-bottom: 15px;
              font-size: 18px;
            }
            p {
              text-align: justify;
              margin-bottom: 12px;
            }
            .gantt-chart {
              margin: 20px 0;
              font-family: monospace;
            }
            table {
              border-collapse: collapse;
              width: 100%;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #333;
              padding: 8px;
              text-align: center;
            }
            th {
              background-color: #f0f0f0;
            }
            @media print {
              body { margin: 20px; }
            }
          </style>
        </head>
        <body>
          ${content.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">UTS Sistem Operasi</h1>
          <button
            onClick={generatePDF}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <FileDown size={20} />
            Download PDF
          </button>
        </div>

        <div id="pdf-content" className="prose max-w-none">
          <h1 style={{textAlign: 'center', marginBottom: '30px'}}>JAWABAN UTS SISTEM OPERASI</h1>

          <h2>1. Struktur Sistem Operasi</h2>
          <p>
            Struktur sistem operasi merupakan organisasi komponen-komponen sistem operasi yang dirancang untuk mengelola sumber daya komputer secara efisien. Setiap lapisan dalam struktur sistem operasi memiliki peran spesifik, mulai dari lapisan paling bawah yang berinteraksi langsung dengan perangkat keras hingga lapisan teratas yang berinteraksi dengan pengguna. Struktur monolithic adalah struktur sistem operasi di mana seluruh layanan sistem berjalan dalam satu ruang kernel tanpa pemisahan yang jelas antar komponen. Kelebihan struktur monolithic adalah performa yang sangat tinggi karena tidak ada overhead komunikasi antar lapisan, dan mudah dalam implementasi karena semua komponen terintegrasi. Namun, kekurangannya adalah sulit untuk dipelihara dan dikembangkan karena kode yang kompleks dan saling bergantung, serta jika satu komponen mengalami error dapat menyebabkan crash seluruh sistem.
          </p>
          <p>
            Struktur layered (berlapis) membagi sistem operasi menjadi beberapa lapisan di mana setiap lapisan hanya dapat berkomunikasi dengan lapisan di atas dan di bawahnya. Kelebihan struktur layered adalah modularitas yang baik sehingga memudahkan debugging dan maintenance, serta abstraksi yang jelas antar lapisan. Kekurangannya adalah performa yang lebih rendah karena overhead komunikasi antar lapisan, dan kesulitan dalam menentukan urutan lapisan yang tepat. Struktur microkernel memindahkan sebagian besar layanan sistem operasi ke ruang pengguna (user space) dan hanya menyisakan fungsi-fungsi inti seperti komunikasi antar proses dan manajemen memori dasar di kernel. Kelebihannya adalah lebih aman dan stabil karena isolasi antar komponen, mudah untuk dikembangkan dan dimodifikasi, serta portabilitas yang tinggi. Kekurangannya adalah performa yang lebih rendah karena banyaknya komunikasi antar komponen melalui message passing.
          </p>

          <h2>2. Process dalam Sistem Operasi</h2>
          <p>
            Process adalah program yang sedang dieksekusi atau dalam keadaan aktif di memori utama. Perbedaan mendasar antara program dan process adalah program merupakan entitas pasif yang berupa kode instruksi yang tersimpan di media penyimpanan, sedangkan process adalah entitas aktif yang memiliki program counter, register, dan sumber daya yang dialokasikan oleh sistem operasi. Satu program dapat menghasilkan beberapa process jika dijalankan berkali-kali secara bersamaan.
          </p>
          <p>
            Siklus hidup proses (process life cycle) terdiri dari beberapa tahapan. Pertama adalah state New, yaitu ketika proses baru saja dibuat dan belum siap untuk dieksekusi, sistem operasi sedang mempersiapkan struktur data dan alokasi sumber daya awal. Kedua adalah state Ready, di mana proses sudah siap untuk dieksekusi dan menunggu giliran mendapatkan CPU dari scheduler. Ketiga adalah state Running, yaitu ketika proses sedang dieksekusi oleh CPU dan instruksi-instruksinya sedang dijalankan. Keempat adalah state Waiting (Blocked), terjadi ketika proses menunggu suatu event seperti I/O completion atau sinyal dari proses lain, sehingga proses tidak dapat melanjutkan eksekusi meskipun mendapat CPU. Kelima adalah state Terminated (Exit), yaitu ketika proses telah selesai menjalankan semua instruksinya atau dihentikan oleh sistem, dan sistem operasi akan melepaskan semua sumber daya yang dialokasikan untuk proses tersebut.
          </p>

          <h2>3. Process Control dan Context Switching</h2>
          <p>
            Process control adalah mekanisme sistem operasi untuk mengelola dan mengontrol eksekusi proses-proses yang berjalan di sistem. Sistem operasi menggunakan struktur data yang disebut Process Control Block (PCB) untuk menyimpan informasi tentang setiap proses, termasuk process ID, program counter, register values, memory management information, dan status I/O. Melalui PCB, sistem operasi dapat melacak dan mengendalikan semua proses yang ada.
          </p>
          <p>
            Context switching adalah proses menyimpan state dari proses yang sedang berjalan dan memuat state dari proses lain yang akan dijalankan. Ketika terjadi context switch, CPU akan menyimpan nilai-nilai register dan program counter dari proses yang sedang berjalan ke PCB-nya, kemudian memuat nilai-nilai tersebut dari PCB proses yang akan dijalankan berikutnya. Mekanisme ini sangat penting dalam sistem multitasking karena memungkinkan CPU untuk beralih di antara banyak proses dengan cepat, menciptakan ilusi bahwa banyak proses berjalan secara bersamaan (concurrent execution). Tanpa context switching, sistem hanya dapat menjalankan satu proses dari awal hingga selesai sebelum memulai proses lain, yang akan sangat tidak efisien dan tidak responsif. Context switching memungkinkan time-sharing dan multiprogramming, meningkatkan utilisasi CPU dan responsivitas sistem secara keseluruhan.
          </p>

          <h2>4. Thread dan Multithreading</h2>
          <p>
            Thread adalah unit eksekusi terkecil dalam sebuah proses yang dapat dijadwalkan oleh sistem operasi. Perbedaan utama antara thread dan process adalah thread berbagi ruang alamat dan sumber daya dengan thread lain dalam proses yang sama, sedangkan process memiliki ruang alamat dan sumber daya yang terpisah. Beberapa thread dalam satu proses berbagi code section, data section, dan resources seperti file yang terbuka, tetapi setiap thread memiliki register, stack, dan program counter sendiri.
          </p>
          <p>
            Penggunaan multithreading dapat meningkatkan kinerja sistem dalam beberapa cara. Pertama, responsiveness meningkat karena aplikasi dapat tetap responsif meskipun sebagian thread sedang melakukan operasi yang memakan waktu. Kedua, resource sharing lebih efisien karena thread dalam proses yang sama berbagi memori dan sumber daya tanpa perlu mekanisme komunikasi khusus seperti pada process. Ketiga, ekonomis dalam hal overhead karena pembuatan dan context switching antar thread lebih murah dibandingkan process. Keempat, scalability pada sistem multiprocessor di mana thread-thread dapat berjalan paralel pada core yang berbeda.
          </p>
          <p>
            Contoh penerapan thread dalam aplikasi nyata adalah web browser modern seperti Chrome atau Firefox yang menggunakan multiple threads untuk menangani rendering halaman web, menjalankan JavaScript, mengunduh file, dan mengelola tab secara bersamaan. Web server seperti Apache juga menggunakan multithreading di mana setiap thread menangani request dari client yang berbeda, memungkinkan server melayani banyak client secara concurrent. Aplikasi video editor menggunakan thread terpisah untuk preview, rendering, dan user interface agar tetap responsif saat melakukan operasi yang intensif.
          </p>

          <h2>5. Penjadwalan CPU dengan Algoritma SJF</h2>
          <p>
            Tujuan utama CPU scheduling dalam sistem operasi adalah untuk memaksimalkan utilisasi CPU dan throughput sistem, meminimalkan waktu tunggu (waiting time) dan waktu turnaround, serta memberikan response time yang cepat untuk meningkatkan pengalaman pengguna. CPU scheduling memastikan bahwa CPU tidak idle ketika masih ada proses yang siap untuk dieksekusi, dan mengatur giliran proses-proses mendapatkan CPU dengan adil dan efisien.
          </p>

          <h3>Perhitungan SJF (Non-Preemptive):</h3>
          
          <table>
            <thead>
              <tr>
                <th>Proses</th>
                <th>Arrival Time</th>
                <th>Burst Time</th>
                <th>Start Time</th>
                <th>Completion Time</th>
                <th>Turnaround Time</th>
                <th>Waiting Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P1</td>
                <td>0</td>
                <td>8</td>
                <td>0</td>
                <td>8</td>
                <td>8</td>
                <td>0</td>
              </tr>
              <tr>
                <td>P2</td>
                <td>1</td>
                <td>4</td>
                <td>8</td>
                <td>12</td>
                <td>11</td>
                <td>7</td>
              </tr>
              <tr>
                <td>P4</td>
                <td>3</td>
                <td>5</td>
                <td>12</td>
                <td>17</td>
                <td>14</td>
                <td>9</td>
              </tr>
              <tr>
                <td>P3</td>
                <td>2</td>
                <td>9</td>
                <td>17</td>
                <td>26</td>
                <td>24</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>

          <h3>Gantt Chart:</h3>
          <div className="gantt-chart bg-gray-50 p-4 rounded border-2 border-gray-300">
            <pre style={{margin: 0}}>
{`┌────────┬──────┬──────┬──────────┐
│   P1   │  P2  │  P4  │    P3    │
└────────┴──────┴──────┴──────────┘
0        8      12     17         26`}
            </pre>
          </div>

          <h3>Penjelasan Penjadwalan:</h3>
          <p>
            Pada algoritma Shortest Job First (SJF) non-preemptive, proses dipilih berdasarkan burst time terpendek dari proses-proses yang sudah tiba (arrival time). Pada waktu 0, hanya P1 yang sudah tiba sehingga P1 dieksekusi terlebih dahulu hingga selesai pada waktu 8. Pada waktu 8, proses yang sudah tiba adalah P2 (burst time 4), P3 (burst time 9), dan P4 (burst time 5). Karena P2 memiliki burst time terpendek, maka P2 dieksekusi hingga selesai pada waktu 12. Selanjutnya, antara P3 dan P4, proses P4 memiliki burst time lebih pendek (5 vs 9), sehingga P4 dieksekusi hingga waktu 17. Terakhir, P3 dieksekusi hingga selesai pada waktu 26.
          </p>

          <h3>Perhitungan Rata-rata:</h3>
          <p>
            Average Waiting Time = (0 + 7 + 15 + 9) / 4 = 31 / 4 = 7.75 satuan waktu
            <br/>
            Average Turnaround Time = (8 + 11 + 24 + 14) / 4 = 57 / 4 = 14.25 satuan waktu
          </p>
          <p>
            Algoritma SJF menghasilkan average waiting time yang optimal dibandingkan algoritma penjadwalan lainnya, namun memiliki kelemahan yaitu dapat menyebabkan starvation pada proses dengan burst time yang panjang jika terus-menerus ada proses baru dengan burst time yang lebih pendek.
          </p>
        </div>
      </div>
    </div>
  );
}