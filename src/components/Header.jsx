import Logo from "./Logo"
import ProfilePicture from '../assets/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


const SearchBox = () => (
    <div className="relative search-box">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded border border-gray-300"
      />
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
    </div>
  );

const UserMenu = () => (
    <div className="user-menu">
        <img className="w-16 h-16 rounded-full" src={ProfilePicture} alt="User" />
    </div>
)

const Header = () => (
    <div className="header flex justify-between items-start p-4">
        <Logo/>
        <SearchBox className="flex-auto"/>
        <UserMenu className="flex-auto" />
    </div>
)

export default Header