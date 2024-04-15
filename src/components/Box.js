import avatar from "../assets/DummyAvatar.jpg";

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

      <div className="grid gap-5">
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
              <p>@user</p>
            </div>

            <p>Joined D M Y</p>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus reprehenderit voluptas minima tempora quis, sequi esse,
          non amet adipisci enim quas odio sunt assumenda quaerat ab atque
          aliquid nostrum praesentium?
        </p>

        <div className="flex justify-between align-center rounded-lg bg-white-400 p-5 text-left">
          <div>
            <p className="text-blue-800 text-lg">Repos</p>
            <p className="font-bold text-2xl">8</p>
          </div>
          <div>
            <p className="text-blue-800 text-lg">Followers</p>
            <p className="font-bold text-2xl">9999</p>
          </div>
          <div>
            <p className="text-blue-800 text-lg">Following</p>
            <p className="font-bold text-2xl">150</p>
          </div>
        </div>

        <div>
          <div>
            <p></p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
