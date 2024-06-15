function kirimData() {
    var Nama = document.getElementById("Nama").value;
    var NoTelepon = document.getElementById("No Telepon").value;
    var PilihFilm = document.getElementById("Pilih Film").value;
    var alamat = document.getElementById("alamat").value;
    var JumlahTiket = document.getElementById("Jumlah Tiket").value;
    var tanggal = document.getElementById("tanggal").value;

    alert(
        "Nama: " + Nama +
        "\nNo Telepon: " + NoTelepon +
        "\nPeminatan: " + PilihFilm +
        "\nAlamat: " + alamat +
        "\nJumlah Tiket: " + JumlahTiket +
        "\nTanggal: " + tanggal
    );

    document.getElementById("result").innerHTML =
        "<p>Nama: " + Nama + "</p>" +
        "<p>No Telepon: " + NoTelepon + "</p>" +
        "<p>Peminatan: " + PilihFilm + "</p>" +
        "<p>Alamat: " + alamat + "</p>" +
        "<p>Jumlah Tiket: " + JumlahTiket + "</p>" +
        "<p>Tanggal: " + tanggal + "</p>";

    return false;
}
