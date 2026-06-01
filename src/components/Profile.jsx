function Profile({ photo, title, bio }) {
  return (
    <section className="profile">
      <img src={photo} alt="profile" />

      <div>
        <h2>{title}</h2>
        <p>{bio}</p>
      </div>
    </section>
  );
}

export default Profile;
