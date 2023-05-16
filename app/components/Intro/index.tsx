import React from "react";
import Image from "next/image";

import {
  full_name,
  avatar,
  about,
  current,
  motivation,
  plan,
} from "app/lib/personalInfo";

const Intro = () => {
  return (
    <>
      <div className="max-w-screen-lg mr-auto ml-auto my-[64px] gap-y-4 flex flex-col justify-center items-center">
        <Image
          src={avatar}
          width={150}
          height={150}
          alt={full_name}
          className="rounded-full grayscale"
          priority
          placeholder="blur"
        />
        <p className="text-lg text-slate-500 border-b-[1px] border-dashed leading-normal">
          {full_name}
        </p>
      </div>
      <div className="max-w-screen-sm">
        <section className="border-t-[1px] border-neutral-50">
          <h2 className="font-extrabold text-3xl text-slate-900 mb-6">About</h2>
          <p className="text-slate-700 leading-normal">{about()}</p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-slate-700 my-6">Current</h2>
          <p className="text-slate-700 leading-normal">{current()}</p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-slate-700 my-6">Motivation</h2>
          <p className="text-slate-700 leading-normal">{motivation()}</p>
        </section>
        <section>
          <h2 className="font-bold text-xl text-slate-700 my-6">Plan</h2>
          <p className="text-slate-700 leading-normal">{plan()}</p>
        </section>
      </div>
    </>
  );
};

export default Intro;
