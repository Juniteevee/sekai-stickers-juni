import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Info({ open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Info</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"><Typography variant="h6" component="h3">
              Featured vTubers:
            </Typography>
            <List>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://www.twitch.tv/juniteevee")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Juni"
                    src="https://avatars.githubusercontent.com/Juniteevee"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Juni"
                  secondary=""
                />
              </ListItem>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://www.twitch.tv/solaetv")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Solae"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/00ef15d8-7616-48b9-8eed-05b821fc6f0c-profile_image-70x70.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Solae"
                  secondary=""
                />
              </ListItem>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://www.twitch.tv/nyrator")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Nyrator"
                    src="https://pbs.twimg.com/profile_images/1553882557900546051/7NDFVoi0_400x400.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Nyrator"
                  secondary=""
                />
              </ListItem>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://www.twitch.tv/jjsamachama")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="JJsamachama"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/c06cd804-6ee8-46b4-93c5-efbbe7faf48f-profile_image-70x70.jpeg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="JJsamachama"
                  secondary=""
                />
              </ListItem>
            </List>
            <Typography variant="h6" component="h3">
              Artist Credits:
            </Typography>
            <List>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://beacons.ai/turrkoise")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Turrkoise"
                    src="https://cdn.beacons.ai/user_content/iQptaU7TlsNjPdI2mQDd4PEJwWX2/profile_turrkoise.png"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Turrkoise"
                  secondary="Juni's emotes (the professional ones)"
                />
              </ListItem>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://nyrator.carrd.co/")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Nyrator"
                    src="https://pbs.twimg.com/profile_images/1553882557900546051/7NDFVoi0_400x400.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Nyrator"
                  secondary="Solae, JJ, and Nyrator's emotes"
                />
              </ListItem>
            </List>
            <Typography variant="h6" component="h3">
              Source:
            </Typography>
            <List>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Juniteevee/sekai-stickers-juni")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="GitHub " secondary="Source Code" />
              </ListItem>
              <ListItem
                button
                onClick={() =>
                  (window.location.href =
                    "https://github.com/TheOriginalAyaka/sekai-stickers")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="GitHub"
                    src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  />
                </ListItemAvatar>
                <ListItemText primary="Forked from" secondary="Project Sekai Stickers" />
              </ListItem>
            </List>
            <Typography variant="h6" component="h3">
              Interested in being added?
            </Typography>
            <List>
            <ListItem
                button
                onClick={() =>
                  (window.location.href = "https://twitter.com/bunhunfun")
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt="Juni"
                    src="https://avatars.githubusercontent.com/Juniteevee"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Juni"
                  secondary="Reach out to me on twitter or discord"
                />
              </ListItem>
            </List>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
