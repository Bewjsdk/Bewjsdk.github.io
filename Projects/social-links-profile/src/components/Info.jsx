import profile from '/assets/images/avatar-jessica.jpeg';

function Info() {
  return (
    <header className="card-profile-header">
      <img src={profile} alt="Profile Picture" />
      <h1>Jessica Randall</h1>
      <p className="country-info">London, United Kingdom</p>
      <p>
        {'"Front-end developer and avid reader."'}
      </p>
    </header>
  )
}

export default Info