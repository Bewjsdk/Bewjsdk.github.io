import Button from "./Button";
import Info from "./Info"

const socialLink = ["Github", "Frontend Mentor", "Linkedln", "Twiiter", "Instagram"];

function ProfileCard() {

  const buttonElements = socialLink.map((link,index) => {
    return <Button key={index} data={link}/>
  });

  return (
    <div className="card-profile">
      <Info />
      <div className="card-profile-social">
        {buttonElements}
      </div>
    </div>
  )
}

export default ProfileCard