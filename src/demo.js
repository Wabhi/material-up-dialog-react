import React from "react";
import "./styles.scss";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <section class="pop_outer pop-up_diaplay-none" data-aos="zoom-in">
              <div class="pop_inner" id="ask_queries">
                <div class="pop-up_content-box">
                  <div class="query_header">
                    <h1 class="content-box_header">
                      <span class="grey-color color_light-bg">
                        {" "}
                        Get in touch{" "}
                      </span>
                    </h1>
                    <p> Have questions? Let's talk! </p>
                    <div id="pop_alert_message" class="pop_alert_message"></div>
                  </div>
                  <div class="query_container">
                    <input
                      type="text"
                      id="person_name"
                      class="personal_detail-box box_outline"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      id="person_email"
                      class="personal_detail-box box_outline"
                      placeholder="Email"
                    />
                    <textarea
                      id="query_text"
                      class="query_text-area box_outline"
                      placeholder="Ask away!"
                    ></textarea>
                  </div>
                  <div class="query_button">
                    <div class="submit">Submit</div>
                  </div>
                </div>
              </div>
            </section>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
