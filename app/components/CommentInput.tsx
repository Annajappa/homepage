import { Paperclip, Smile, Image } from "lucide-react";

export default function CommentInput() {
  return (
    <div className="flex items-start space-x-3">
  {/* Avatar */}
  <div className="w-10 h-10 bg-gray-300 rounded-full" />

  {/* Input Area */}
  <div className="flex items-center bg-gray-100 rounded px-4 py-2 mt-2 w-full">
    <input
      type="text"
      placeholder="Write your comment..."
      className="flex-grow bg-gray-100 focus:outline-none text-black font-semibold"
    />
    <div className="flex items-center space-x-3 ml-4">
      <Paperclip className="w-5 h-5 text-gray-500 cursor-pointer" />
      <Smile className="w-5 h-5 text-gray-500 cursor-pointer" />
      <Image className="w-5 h-5 text-gray-500 cursor-pointer" />
    </div>
  </div>
</div>

  );
}
