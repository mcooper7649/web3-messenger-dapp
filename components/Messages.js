import { useRef } from 'react';
import SendMessage from './SendMesage';
import Message from './Message';

function Messages({ userProfile }) {
  const endOfMessageRef = useRef(null);
  const data = ['im a message', 'message number 2'];
  // const { data, loading, error } = useMoralisQuery(
  //   'Messages',
  //   (query) =>
  //     query
  //       .ascending('createdAt')
  //       .greaterThan(
  //         'createdAt',
  //         newDate(Date.now() - 1000 * 60 * MINS_DURATION)
  //       ),
  //   [],
  //   { live: true }
  // );

  console.log(userProfile.username);
  return (
    <div className="pb-56">
      <div className="space-y-10 p-4">
        {/* Each Message */}
        {data.map((message) => (
          <Message
            userProfile={userProfile}
            key={message.id}
            message={message}
          />
        ))}
        test
      </div>
      <div>
        <SendMessage
          endOfMessageRef={endOfMessageRef}
          userProfile={userProfile}
          className="flex justify-center"
        />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>
          Youre up to date {userProfile.username || userProfile.user.address}
        </p>
      </div>
    </div>
  );
}

export default Messages;
