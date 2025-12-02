import Image from "next/image"

export type content = {
  logo: string
  name: string
  likeCount: number
  replyCount: number
  time: number
  content: string
}

export default function CommunityCard({ content }: { content: content }) {
  const date = (Date.now() - content.time) / 2592000;

  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-[75vw] md:w-[40vw] bg-white border border-[#e5e5e5] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer">

        <div className="flex items-center gap-4 mb-4">
          <Image
            src={content.logo}
            alt="logo"
            height={55}
            width={55}
            className="rounded-full border border-gray-200"
          />

          <div className="flex flex-col">
            <span className="text-sm text-gray-500">
              {Math.floor(date)} months ago
            </span>
            <span className="font-semibold text-gray-900">
              {content.name}
            </span>
          </div>
        </div>

        <div className="text-gray-800 leading-relaxed border border-[#d9d9da] rounded-lg p-4 bg-gray-50">
          {content.content}
        </div>

      </div>
    </div>
  )
}
