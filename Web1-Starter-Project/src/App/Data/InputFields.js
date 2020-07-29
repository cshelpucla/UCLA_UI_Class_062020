
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import BookIcon from '@material-ui/icons/Book';
import HouseIcon from '@material-ui/icons/House';
import GardenIcon from '@material-ui/icons/Flare';
import HammerIcon from '@material-ui/icons/Devices';
import StoryIcon from '@material-ui/icons/ChromeReaderMode';
import MusicIcon from '@material-ui/icons/SurroundSound';
import SettingsIcon from '@material-ui/icons/Settings';
import CalendarIcon from '@material-ui/icons/Schedule';
import { uuid } from "uuidv4";

export const InputFields = [
  { id:"firstName",  label: "First Name", placeholder : "John", type: "text", children: [] }, 
  { id:"lastName",   label: "Last  Name", placeholder : "John", type: "text", children: [] },  
  { id:"street",     label: "Street",     placeholder : "John", type: "text", children: [] },
  { id:"city",       label: "City",       placeholder : "John", type: "text", children: [] },
  { id:"state",      label: "State",      placeholder : "John", type: "text", children: [{"CA":"California"},{"NY":"New York"}] },
  { id:"zip",        label: "Zip",        placeholder : "John", type: "text", children: [] },
  { id:"email",      label: "Email",      placeholder : "John", type: "email", children: [] }
]




