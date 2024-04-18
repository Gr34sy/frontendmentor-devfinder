// import avatar from "../assets/DummyAvatar.jpg";
import iconCompany from "../assets/icon-company.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconLocation from "../assets/icon-location.svg";
import iconWebsite from "../assets/icon-website.svg";
import { NotAvialable } from "./NotAvialable";

export function Box({user}) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="bg-white-200 dark:bg-slate-800 p-4 sm:p-10 rounded-lg grid gap-8 grid-cols-auto1fr">
      <div className="avatar-div">
        <img
          src={user.avatar}
          alt="Github user avatar"
          className="w-full h-full rounded-full"
        />
      </div>

      <div className="grid gap-6">
        <div className="grid grid-cols-auto1fr--mobile">
          <div className="avatar-div--mobile">
            <img
              src={user.avatar}
              alt="Github user avatar"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="grid header-title">
            <div>
              <h2 className="font-bold text-3xl">{user.name}</h2>
              <p className="text-blue-600">@{user.login}</p>
            </div>

            <p className="text-blue-700 dark:text-white-100">Joined {user.createdAt.getDay()} {months[user.createdAt.getMonth()]} {user.createdAt.getFullYear()}</p>
          </div>
        </div>

        <p className="text-blue-800 dark:text-white-100">
          {user.bio}
        </p>

        <div className="flex justify-between align-center rounded-lg bg-white-400 dark:bg-slate-900 p-2 sm:p-5 text-left">
          <div>
            <p className="text-blue-800 min-[350px]:text-lg dark:text-white-100">Repos</p>
            <p className="font-bold min-[350px]:text-2xl">{user.repos}</p>
          </div>
          <div>
            <p className="text-blue-800 min-[350px]:text-lg dark:text-white-100">
              Followers
            </p>
            <p className="font-bold min-[350px]:text-2xl">{user.followers}</p>
          </div>
          <div>
            <p className="text-blue-800 min-[350px]:text-lg dark:text-white-100">
              Following
            </p>
            <p className="font-bold min-[350px]:text-2xl">{user.following}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-12 text-blue-800 dark:text-white-100">
          <div className="grid gap-2">
            <div className="flex gap-2 items-center">
              <img src={iconLocation} alt="location icon" />
              <p>{user.location}</p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={iconWebsite} alt="link icon" />
              {user.url ? <a href={user.url} className="underline">Check profile</a> : <NotAvialable />}
            </div>
          </div>

          <div className="grid gap-2">
            <div className="flex gap-2 items-center">
              <img src={iconTwitter} alt="twitter icon" />
              {user.twitter ? <p>{user.twitter}</p> : <NotAvialable />}
            </div>

            <div className="flex gap-2 items-center">
              <img src={iconCompany} alt="icon of a building" />
              {user.company ? <p>@{user.company}</p> : <NotAvialable />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
