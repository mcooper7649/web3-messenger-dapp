import { useState } from 'react';

function SendMesage({ userProfile, endOfMessageRef }) {
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend('Messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: userProfile.username,
        ethAdderess: userProfile.user.address,
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessageRef.current.scrollIntoView({
      behavior: 'smooth',
    });
    setMessage('');
  };
  console.log(userProfile);
  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-2xl rounded-full border-4 border-blue-400">
      <input
        className="flex-grow outline-none bg-transparent text-white"
        type="text placeholder-gray-500 pr-5"
        placeholder={`Enter a Message ${userProfile.username}....`}
        value={message}
        onChange={() => setMessage(e.target.value)}
      />
      <button
        onClick={sendMessage}
        className="font-bold text-pink-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
}

export default SendMesage;
