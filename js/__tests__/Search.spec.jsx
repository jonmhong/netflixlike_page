import React from 'react';
import { shallow } from 'enzyme';
import preload from '../../data.json';
import Search from '../Search';
import ShowCard from '../ShowCard';

// must configure package.json to include jest.snapshotSerializers

describe('<Search />', () => {
    test('Search renders correctly', () => {
        const component = shallow(<Search shows={preload.shows} />);

        expect(component).toMatchSnapshot();
    });

    test('should render correct amount of shows', () => {
        const moviesInJson = preload.shows.length;
        const component = shallow(<Search shows={preload.shows} />);
        const movieNumberRendered = component.find(ShowCard).length;

        expect(movieNumberRendered).toEqual(moviesInJson);
    });

    test('should show correct number of shows based on Search term', () => {
        const searchWord = 'black';
        // filter out all shows/descr in the json file that have the word 'black'
        const showCount = preload.shows.filter(
            show => `${show.title} ${show.description}`.toUpperCase().indexOf(
                searchWord.toUpperCase()
            ) >= 0
        ).length;

        const component = shallow(<Search shows={preload.shows} />);
        // simulate typing out the word 'black' in search
        component.find('input').simulate(
            'change', {target: {value: searchWord}}
        );
        const movieNumberRendered = component.find(ShowCard).length;

        expect(movieNumberRendered).toEqual(showCount);
    });
});
