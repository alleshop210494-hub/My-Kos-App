import React, { useState } from 'react';
import { formatRupiah } from '../../utils/formatters';
import api from '../../services/api';

export default function RoomManagement({ rooms, onRoomAdded }) {
  const [roomForm, setRoomForm] = useState({
    number: '',
    type: 'AC / Deluxe',
    price: '',
    location: 'Kawasan Untan, Pontianak',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await api.post('/rooms', {
        ...roomForm,
        price: Number(roomForm.price),
      });
      setRoomForm({
        number: '',
        type: 'AC / Deluxe',
        price: '',
        location: 'Kawasan Untan, Pontianak',
      });
      if (onRoomAdded) onRoomAdded();
    } catch (err) {
      setError(err.response?.data?.message || 'Gagal menambah kamar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '600',
            color: '#1e293b',
          }}
        >
          Daftar Kamar Kos
        </h2>
      </div>

      {error && (
        <div
          style={{
            background: '#fee2e2',
            color: '#991b1b',
            padding: '12px',
            borderRadius: '6px',
            marginBottom: '20px',
            border: '1px solid #fecaca',
          }}
        >
          {error}
        </div>
      )}

      <div
        style={{
          overflowX: 'auto',
          marginBottom: '30px',
          border: '1px solid #e2e8f0',
          borderRadius: '8px',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            fontSize: '14px',
          }}
        >
          <thead>
            <tr
              style={{
                background: '#f8fafc',
                color: '#475569',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <th style={{ padding: '12px 16px', fontWeight: '600' }}>Nomor</th>
              <th style={{ padding: '12px 16px', fontWeight: '600' }}>Tipe</th>
              <th style={{ padding: '12px 16px', fontWeight: '600' }}>
                Harga / Bulan
              </th>
              <th style={{ padding: '12px 16px', fontWeight: '600' }}>
                Lokasi
              </th>
              <th style={{ padding: '12px 16px', fontWeight: '600' }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr
                key={room.id}
                style={{
                  borderBottom:
                    index !== rooms.length - 1 ? '1px solid #e2e8f0' : 'none',
                  background: '#ffffff',
                }}
              >
                <td
                  style={{
                    padding: '12px 16px',
                    fontWeight: '600',
                    color: '#0f172a',
                  }}
                >
                  {room.number}
                </td>
                <td style={{ padding: '12px 16px', color: '#334155' }}>
                  {room.type}
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    color: '#334155',
                    fontWeight: '500',
                  }}
                >
                  {formatRupiah(room.price)}
                </td>
                <td style={{ padding: '12px 16px', color: '#64748b' }}>
                  {room.location}
                </td>
                <td style={{ padding: '12px 16px' }}>
                  <span
                    style={{
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      background:
                        room.status === 'Tersedia' ? '#dcfce7' : '#fee2e2',
                      color: room.status === 'Tersedia' ? '#166534' : '#991b1b',
                    }}
                  >
                    {room.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{
          background: '#f8fafc',
          padding: '24px',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
        }}
      >
        <h3
          style={{
            margin: '0 0 16px 0',
            fontSize: '18px',
            fontWeight: '600',
            color: '#1e293b',
          }}
        >
          Tambah Kamar Baru
        </h3>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#475569',
              }}
            >
              Nomor Kamar
            </label>
            <input
              type="text"
              placeholder="Cth: C1"
              value={roomForm.number}
              onChange={(e) =>
                setRoomForm({ ...roomForm, number: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                background: '#ffffff',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#475569',
              }}
            >
              Tipe Kamar
            </label>
            <select
              value={roomForm.type}
              onChange={(e) =>
                setRoomForm({ ...roomForm, type: e.target.value })
              }
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                background: '#ffffff',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            >
              <option value="AC / Deluxe">AC / Deluxe</option>
              <option value="Non-AC / Standard">Non-AC / Standard</option>
              <option value="AC / VIP">AC / VIP</option>
            </select>
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#475569',
              }}
            >
              Harga per Bulan (Rp)
            </label>
            <input
              type="number"
              placeholder="Contoh: 1500000"
              value={roomForm.price}
              onChange={(e) =>
                setRoomForm({ ...roomForm, price: e.target.value })
              }
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                background: '#ffffff',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '6px',
                fontSize: '13px',
                fontWeight: '500',
                color: '#475569',
              }}
            >
              Lokasi / Area
            </label>
            <input
              type="text"
              placeholder="Kawasan Untan, Pontianak"
              value={roomForm.location}
              onChange={(e) =>
                setRoomForm({ ...roomForm, location: e.target.value })
              }
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #cbd5e1',
                borderRadius: '6px',
                background: '#ffffff',
                boxSizing: 'border-box',
                outline: 'none',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              gridColumn: 'span 2',
              padding: '11px',
              background: '#10b981',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '15px',
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)',
              transition: 'background 0.2s',
            }}
          >
            {loading ? 'Menyimpan...' : 'Simpan Kamar Baru'}
          </button>
        </form>
      </div>
    </div>
  );
}
