export const Message = (messageInfo) => {
  if (messageInfo.username === messageInfo.user) {
    return (
      <div className="w-52  ml-auto capitalize  p-4 rounded-md relative bg-[#116077]">
        <p className="break-words bg-[#116077] text-secondary">
          {messageInfo.message}
        </p>
      </div>
    );
  }
  return (
    <div className="w-52 bg-primary mr-auto capitalize p-4 rounded-md relative">
      <p className="break-words bg-primary text-secondary">
        {messageInfo.message}
      </p>
    </div>
  );
};
