import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';
import axios from 'axios';
export default function Notifi1() {
    const [open, setOpen] = React.useState(false);


    const handleClickToOpen = () => {
        setOpen(true);
    };

    const handleToClose = () => {
        setOpen(false);
        window.location.href="/login";
    };

    const [value, setValue] = useState();

    const onChange = useCallback(
        (value) => {
            setValue(value);
        },
        [setValue],
        // sentdate()
        console.log(value)
    );

    return (
        <div style={{ alignItems:"center",padding:"20px 30px"}}>

            <Button variant="outlined" color="primary"
                    onClick={handleClickToOpen}>
                Next Login
            </Button>
            <Dialog open={open} onClose={handleToClose}>
                <DialogTitle>{"When u want to come again?"}</DialogTitle>
                <DialogContent>
                    {/* <select id="date">
                <option value="">MONDAY</option>
                <option value="">TUESDAY</option>
                <option value="">WEDNESDAY</option>
                <option value="">THURSDAY</option>
                <option value="">FRIDAY</option>
                <option value="">SATURDAY</option>
                <option value="">SUNDAY</option>
              </select> */}
                    <div>

                        <Calendar value={value} onChange={onChange} />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleToClose}
                            color="primary" autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}