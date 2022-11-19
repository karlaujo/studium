import React, { useEffect } from 'react'
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import { fetchFromAPI } from '../../../Utils/fetchFromAPI.js';

const Paginate = ({ page }) => {
    const classes = useStyles();

    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={4}
            page={Number(page) || 1}
            variant="outlined"
            renderItem={(item) => (
                <PaginationItem { ...item} component={Link} to={`/Music?page=${item.page}`} />
            )}
            />

    )
}

export default Paginate;
