const connectDB = async () => {
  try {
    console.log('Database berhasil terhubung (Mock / In-Memory Mode)');
  } catch (error) {
    console.error('Koneksi database gagal:', error.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
