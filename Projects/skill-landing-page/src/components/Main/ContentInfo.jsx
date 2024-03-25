import profilePic from '/stelle-profile.png';

function ContentInfo() {
  return (
    <section className="content-info">
      {/* Content Description */}
      <div className="content-info-description">
        {/* Title */}
        <h1>Maximize skill, minimize budget</h1>
        {/* Description */}
        <p>
          Our modern courses across a range of in-demand 
          skills will give you the knowledge you need to live 
          the life you want.
        </p>
        {/* Link on Content */}
        <button className="btn btn-content">Get Started</button>
      </div>

      {/* Content Picture & Some Stat */}
      <figure className="content-info-picture">
        {/* Profile Frame */}
        <div className="profile-frame">
          {/* Profile */}
          <img src={profilePic} alt="Profile Picture" />
          {/* Member Stats */}
          <div className="member stat">
            <p>Members <br/> <span>29K</span></p>
          </div>
          {/* Course Hours Stats */}
          <div className="course stat">
            <p>Course hours <br/> <span>1,451 hr</span></p>
          </div>
        </div>
      </figure>
    </section>
  )
}

export default ContentInfo