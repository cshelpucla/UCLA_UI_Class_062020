
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

export const TreeViewItems = 
[{ id: "1",
    name: "Test",
    children: 
    [ 
      { id: uuid(), name: "Item Bank",labelIcon: MusicIcon,  
            children: [{ id: uuid(), labelIcon: BookIcon, name: "Demographics",children: []  },
                       { id: uuid(), labelIcon: GardenIcon, name: "Questions", children: []   }
                      ]
      },
      { id: uuid(),  name: "Forms", labelIcon: CalendarIcon, 
        children: [{ id: uuid(), name: "Sections",   labelIcon: CalendarIcon,  
                    children: [{ id: uuid(),  name: "Questions",  labelIcon: CalendarIcon, 
                              children: [{ id: uuid(), name: "Tips", labelIcon: CalendarIcon, children: [] }
                              ]          
                    }]
                  }]          
      },
      { id: uuid(), name: "Validations", labelIcon: SettingsIcon, children: [] },
      { id: uuid(), name: "Norms", labelIcon: SettingsIcon, children: [] },
      { id: uuid(), name: "Products", labelIcon: MusicIcon,  
            children: [{ id: uuid(), labelIcon: BookIcon, name: "Books", children: []  },
                       { id: uuid(), labelIcon: GardenIcon, name: "Art",children: []   }
                      ]
      },
  ]
}
]    