"use client";

import AboutPageCard from "@/components/AboutPageCard";
import Go from "@/components/Go";
import GradientDivider from "@/components/GradientDivider";

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <span className="text-8xl md:text-9xl font-semibold tracking-tight divide-y-2 pb-4 bg-gradient-to-r from-neutral-300 to-neutral-400 bg-clip-text text-transparent inline-block">
          About
        </span>
      </div>
      <GradientDivider />
      <div className="flex">
        <div className="hidden md:block w-[80rem] text-center px-10">
          <h1 className="text-2xl font-bold pb-6 text-left">On this page</h1>
          <ul className="text-left pl-6 transition-all">
            <li className="hover:text-lg transition-all duration-200">
              <Go href="#what_is_quark" target="_self">What is Quark?</Go>
            </li>
            <li className="hover:text-lg transition-all duration-200">
              <Go href="#how_do_i_use_quark" target="_self">How do I use Quark?</Go>
            </li>
            <li className="hover:text-lg transition-all duration-200">
              <Go href="#what_is_quark_used_for" target="_self">What is Quark used for?</Go>
            </li>
            <li className="hover:text-lg transition-all duration-200">
              <Go href="#strengthen_the_quark_network" target="_self">Strengthen the Quark network</Go>
            </li>
            <li className="hover:text-lg transition-all duration-200">
              <Go href="#foundation" target="_self">Foundation</Go>
            </li>
          </ul>
        </div>
        <div>
          <br />
        </div>
        <div className="px-8 md:px-8 pb-8">
          <h1 className="text-2xl font-bold pb-6" id="what_is_quark?">What is Quark?</h1>
          <p className="text-neutral-400 text-xs md:text-neutral-200 md:text-base">
            Cryptocurrencies like Bitcoin, Ethereum, and Solana, have opened the doors to global, peer-to-peer money transfers. All currencies have the same philosophy — use currencies as an exchangeable for something. Quark does it too, but the difference is, it&apos;s only made with the Blockchain technology for decentralized tokenization, it has no value in the real world. Quark is just a digital token to be exchanged for something, which is also a digital stuff.
          </p>
          <div className="flex flex-col md:flex-row gap-x-10 py-6">
            <AboutPageCard title="What is Q?" description="Q is the token for the Quark network and wallet." href="/what-is-q" />
            <AboutPageCard title="What is Web 3.0?" description="Web 3.0 is a model for valuing ownership for your Internet assets." href="/what-is-web-3.0" />
          </div>
          <h1 className="text-2xl font-bold pb-6" id="what_is_quark_used_for">How do I use Quark?</h1>
          <p className="text-neutral-400 text-xs md:text-neutral-200 md:text-base">
            Using Quark can mean lots of things to lots of people. Maybe, someone wants to use Quark to exchange for something or maybe wants to use a digital, decentralized token. That&apos;s why, you&apos;ll need an account. The easiest way to create, access your newly created account and store Q is using a software called a Wallet.
          </p>
          <div className="flex flex-col md:flex-row gap-x-10 py-6">
            <AboutPageCard title="What are Wallets?" description="Wallets are like real-world wallets, for string digital assets and proving your identity in the Internet." href="/what-are-wallets" />
            <AboutPageCard title="Use our Wallet" description="Since, Quark is similar to cryptocurrencies but not that, it's a token for exchanging for something. You've to use our own Wallet to store you Qs. Which enables more security rather than using third-party wallets." href="/connect-wallet" />
          </div>
          <h1 className="text-2xl font-bold py-6" id="how_do_i_use_quark">What is Quark used for?</h1>
          <p className="text-neutral-400 text-xs md:text-neutral-200 md:text-base">
            Quark is a secured, decentralized token that can be used for exchange for something, while it is made with the Blockchain technology. Enabling it, the best performance to go. Anyone in the Internet can send, receive, earn and gift Qs with Quark Wallet.
          </p>
          <div className="flex flex-col md:flex-row gap-x-10 py-6">
            <AboutPageCard title="Non-fungible tokens (NFTs)" description="Digital certificates of ownership for unique online assets." href="/nfts" />
            <AboutPageCard title="Decentralized applications (dApps)" description="Decentralized applications (dApps) are applications powered by the Blockchain technology and smart contracts that has no specific authority or owner." href="/dapps" />
          </div>
          <h1 className="text-2xl font-bold py-6" id="strengthen_the_quark_network">Strengthen the Quark network</h1>
          <p className="text-neutral-400 text-xs md:text-neutral-200 md:text-base">
            You can help Quark Network to improve Quark&apos;s performance and start earning Qs at the same time. We&apos;re an organization on GitHub. Follow us <Go href="https://github.com/Quark-Network" target="_blank"><span className="text-blue-400 hover:underline">here</span></Go>. Contribute to the <Go href="https://github.com/Quark-Network/quark" target="_blank"><span className="text-blue-400 hover:underline">Quark repository</span></Go> on GitHub!
          </p>
          <h1 className="text-2xl font-bold py-6" id="foundation">Foundation</h1>
          <p className="text-neutral-400 text-xs md:text-neutral-200 md:text-base">
          Quark Network, our interconnected organization contributed the most on Quark, was founded by <Go href="https://github.com/devsujay19" target="_blank">Sujay</Go>, a 13 years old sole developer from India. Sujay is skilled in various technology, recently (Sunday, 26th May, 2024), the Blockchain technology and Web 3.0 interested him very immensely. Hence, you can read this page content. Follow <Go href="https://github.com/devsujay19" target="_blank"><span className="text-blue-400 hover:underline">him</span></Go> on GitHub!
        </p>
      </div>
    </div >
    </>
  );
};