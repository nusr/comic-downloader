import React, { useEffect } from 'react';
import { connect } from 'dva';
import SearchForm from '../../components/SearchForm';
import { IFormData } from '../../type';

type Props = {
    dispatch: any;
    menuData: any;
};

function getMenuList(data: any = {}) {
    return Object.keys(data).map((key: string) => {
        const item = data[key];
        return {
            value: key,
            name: item.name,
            enabled: item.enabled,
        };
    });
}

const HomePage: React.FunctionComponent<Props> = ({
    dispatch,
    menuData = {},
}) => {
    const menuList: any = getMenuList(menuData);
    useEffect(() => {
        dispatch({
            type: 'menu/fetch',
        });
    }, []);

    function handleSearchSubmit(value: IFormData) {
        if (value.name && value.url) {
            dispatch({
                type: 'shared/changeUrl',
                payload: value.url,
            });
            dispatch({
                type: 'shared/changeParams',
                payload: {
                    name: value.name,
                    noCache: Number(!value.cache),
                },
            });
            // TODO 跳转
        }
    }

    // @ts-ignore
    return <SearchForm handleFormSubmit={handleSearchSubmit} menuList={menuList} />;
};


export default connect()(HomePage);