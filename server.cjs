const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/api/groups/create', (req, res) => {
  const { groupName, inviteEmail } = req.body;

  if (!groupName || !inviteEmail) {
    return res.status(400).json({ message: 'Please provide both group name and email.' });
  }

  console.log(` Group created: ${groupName}`);
  console.log(` Invite sent to: ${inviteEmail}`);

  res.status(200).json({
    message: `Group '${groupName}' created and invite sent to ${inviteEmail}`,
  });
});

app.listen(PORT, () => {
  console.log(` Backend is running at http://localhost:${PORT}`);
});
