import avatar from "../assets/DummyAvatar.jpg";
import iconCompany from "../assets/icon-company.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import { NotAvialable } from "./NotAvialable";

export function Box() {
  return (
    <div className="bg-white-200 dark:bg-slate-800 p-10 rounded-lg grid gap-8 grid-cols-auto1fr">
      <div className="avatar-div">
        <img
          src={avatar}
          alt="Github user avatar"
          className="w-full h-full rounded-full"
        />
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-auto1fr--mobile">
          <div className="avatar-div--mobile">
            <img
              src={avatar}
              alt="Github user avatar"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="grid header-title">
            <div>
              <h2 className="font-bold text-3xl">The User</h2>
              <p className="text-blue-600">@user</p>
            </div>

            <p className="text-blue-700 dark:text-white-100">Joined D M Y</p>
          </div>
        </div>

        <p className="text-blue-800 dark:text-white-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus reprehenderit voluptas minima tempora quis, sequi esse,
          non amet adipisci enim quas odio sunt assumenda quaerat ab atque
          aliquid nostrum praesentium?
        </p>

        <div className="flex justify-between align-center rounded-lg bg-white-400 dark:bg-slate-900 p-5 text-left">
          <div>
            <p className="text-blue-800 text-lg dark:text-white-100">Repos</p>
            <p className="font-bold text-2xl">8</p>
          </div>
          <div>
            <p className="text-blue-800 text-lg dark:text-white-100">
              Followers
            </p>
            <p className="font-bold text-2xl">9999</p>
          </div>
          <div>
            <p className="text-blue-800 text-lg dark:text-white-100">
              Following
            </p>
            <p className="font-bold text-2xl">150</p>
          </div>
        </div>

        <div className="flex gap-12 text-blue-800 dark:text-white-100">
          <div className="grid gap-2">
            <div className="flex gap-2 items-center">
              <img src={iconLocation} alt="location icon" />
              <p>San Francisco</p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={iconWebsite} alt="link icon" />
              <a href="/" className="underline">
                https://github.blog
              </a>
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex gap-2 items-center">
              <img src={iconTwitter} alt="twitter icon" />
              <NotAvialable />
            </div>

            <div className="flex gap-2 items-center">
              <img src={iconCompany} alt="icon of a building" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
