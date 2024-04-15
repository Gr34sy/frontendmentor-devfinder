import avatar from "../assets/DummyAvatar.jpg";

export function Box() {
  return (
    <div className="bg-white-200 dark:bg-slate-800 border-none p-10 rounded-lg grid gap-8 grid-cols-auto1fr">
      <div className="avatar-div">
        <img
          src={avatar}
          alt="Github user avatar"
          className="w-full h-full rounded-full"
        />
      </div>

      <div>
        <div>
          <div>
            <h2>The User</h2>
            <p>@user</p>
          </div>

          <p>Joined D M Y</p>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus reprehenderit voluptas minima tempora quis, sequi esse,
          non amet adipisci enim quas odio sunt assumenda quaerat ab atque
          aliquid nostrum praesentium?
        </p>

        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
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
