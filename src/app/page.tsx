import { Metadata } from "next";
import MessagesSelect from "./components/messagesSelect";

const DATA = {
  title: "WhatsApp Reader Powered by Next.js",
  description: "When you export your WA chat, turns chaotic read the conversations WA Reader gives the format to the conversations and shows like the original chat.",
  thumbnail: "https://whatsapp-reader-next.vercel.app/thumbnail.png",
  deploy: "https://whatsapp-reader-next.vercel.app/"
} 

export const metadata: Metadata = {
  icons: { icon: "/icon.svg" },
  title: DATA.title,
  description: DATA.description,
  openGraph: {
    title: DATA.title,
    description: DATA.description,
    url: DATA.deploy,
    images: DATA.thumbnail,
    type: "website"
  },
  twitter: {
    title: DATA.title,
    card: "summary_large_image",
    description: DATA.description,
    images: [DATA.thumbnail]
  }
};


export default function Home() {
  return (
    <main className={`flex justify-center flex-1 mb-4`}>
      <article className="flex flex-col gap-2 px-4 w-full max-w-screen-md mx-auto">
        <section className="text-center p-5 dark:text-white">
          <h2 className="font-bold text-3xl tracking-wide m-3">
            Interpreats your exported messages
          </h2>
          <p>
            When you export your WA chat, turns chaotic read the conversations
            WA Reader gives the format to the conversations and shows like the
            original chat.
          </p>
        </section>
        <MessagesSelect />
      </article>
    </main>
  );
}
