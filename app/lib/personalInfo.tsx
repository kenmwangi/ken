import Link from "next/link";
import Image from "next/image";
import Me from "../../public/images/profile.jpg";
import Bun from "../../public/images/bun-logo.png";

export const full_name = "Ken Mwangi";
export const email = "kenmwangi071@gmail.com";
export const avatar = Me;
export const bun = Bun;

export const about = () => {
  return (
    <>
      <p className="py-2">
        TLDR: Hello! I&apos;m Ken, a full-stack engineer with a focus on
        building and shipping{" "}
        <strong>
          <i>user-experience </i>
        </strong>
        interactions that are <strong>scalable</strong> and{" "}
        <strong>impactful</strong> .
      </p>

      <p className="py-2">
        I have a proven track record of success in delivering high-quality,
        user-friendly products.
      </p>
    </>
  );
};

export const current = () => {
  return (
    <p>
      Currently, I am an engineering student at{" "}
      <b>
        <Link
          href="https://www.alxafrica.com/"
          target="_blank"
          className="hover:underline hover:underline-offset-4"
        >
          ALX Africa
        </Link>
      </b>{" "}
      where will finish full stack software engineering course in September,
      2023.
    </p>
  );
};

export const motivation = () => {
  return (
    <>
      <p>
        My motivation for starting this blog as way of documentation has been
        greatly been contributed by this 👉️ guy{" "}
        <Link
          href="https://bun.sh/"
          className="hover:underline hover:underline-offset-4"
        >
          <strong>
            <i>https://bun.sh/</i>
          </strong>
        </Link>{" "}
        .
      </p>
      <p>
        It is a Javascript runtime for speed which is already promising and I am
        interested to becoming part of its community. My <i>plan</i> as
        highlighted below is to contribute immensely towards Bun and grow with
        it.
      </p>
    </>
  );
};

export const plan = () => {
  return (
    <p>
      The plan all along has been finding a project I am passionate about and
      stick to the contributions while enjoying the process. Since I am new to{" "}
      <strong>Bun</strong> I am starting small and being patient while I record
      the whole process in this blog. I will use this new techology to build
      personal projects.
    </p>
  );
};
