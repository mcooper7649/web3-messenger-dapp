import { useState } from 'react';

function ChangeUsername({ setUserProfile }) {
  // const { setUserData, isUserUdpating, userError, user } = useMoralis();
  const [isUserUpdating, setIsUserUpdating] = useState(false);

  const setUserName = () => {
    setIsUserUpdating(true);
    const promptName = prompt(`Enter your new Username (current: $(username)`);
    if (!promptName) return;

    setUserProfile({
      username: promptName,
    });
    setIsUserUpdating(false);
  };
  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        onClick={setUserName}
        disabled={isUserUpdating}
        className="hover:text-pink-700"
      >
        Change your Username
      </button>
    </div>
  );
}

export default ChangeUsername;
