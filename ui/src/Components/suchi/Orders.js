import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, category, hospital, contact) {
    return { id, name, category, hospital, contact };
}

const rows = [
    createData(
        0,
        'Elvis Presley',
        'Physician',
        'Apollo',
        9876543210,
    ),
    createData(
        1,
        'Paul McCartney',
        'Psychiatrist',
        'Fortis',
        9786756453,
    ),
    createData(2,  'Tom Scholz', 'Pathologist', 'Bombay Hospital', 7989765325),
    createData(
        3,
        'Michael Jackson',
        'Radiologist',
        'Safdarganj',
        7042353223,
    ),
    createData(
        4,
        'Bruce Springsteen',
        'Neurologist',
        'Medanta',
        9690347216,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>Doctors List</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Hospital</TableCell>
                        <TableCell align="right">Contact Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.category}</TableCell>
                            <TableCell>{row.hospital}</TableCell>
                            <TableCell align="right">{row.contact}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more Doctors
            </Link>
        </React.Fragment>
    );
}