import React, { useState } from 'react';

function GroupInvite() {
  const [groupName, setGroupName] = useState('');
  const [inviteEmail, setInviteEmail] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting', groupName, inviteEmail);

try {
    const response = await fetch('http://localhost:3000/api/groups/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ groupName, inviteEmail }),
    });

    const result = await response.json();
    console.log('Server response:', result);
    setResponseMsg(result.message);
  } catch (error) {
    console.error('Request failed:', error);
    setResponseMsg('Something went wrong. Please try again.');
  };
  }
  return (
<div
  style={{
    padding: '20px 30px',
    backgroundColor: '#e6f2e6', 
    borderBottom: '1px solid #b5d1b5', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Segoe UI, sans-serif',
  }}
>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
        }}
      >
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          required
          style={{
            padding: '10px 15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            flex: '1',
            minWidth: '180px',
          }}
        />
        <input
          type="email"
          placeholder="Invite user by email"
          value={inviteEmail}
          onChange={(e) => setInviteEmail(e.target.value)}
          required
          style={{
            padding: '10px 15px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px',
            flex: '2',
            minWidth: '220px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#1f5ea1',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
          }}
        >
          Create Group & Invite
        </button>
      </form>

      {responseMsg && (
        <p style={{ marginTop: '12px', color: 'green', fontWeight: '500' }}>
          {responseMsg}
        </p>
      )}
    </div>
  );
}

export default GroupInvite;
