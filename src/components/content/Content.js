import React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Content = ({ data, onRemove }) => {
    return (
        <>
            {data.map((item, i) => {
                return (
                    <Card
                        style={{ margin: "0.5rem", width: "100%", padding: "1rem", display: "flex", justifyContent: "space-between" }}
                        key={`card-${i}`}
                        variant='outlined'>
                        {item}
                        <IconButton
                            size="small"
                            aria-label="close"
                            color="inherit"
                            onClick={() => onRemove(i)}
                        >
                        <CloseIcon fontSize="small" color='error' />
                        </IconButton>
                    </Card>);
            })}
        </>
    );
}