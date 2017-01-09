import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
import Card from '../js/components/card';
import List from '../js/components/list';
import ListContainer from '../js/components/list-container';
import Board from '../js/components/board';

const should = chai.should();

describe('trello component', function() {
    it('Board renders the cards',  function() {


        const renderer = TestUtils.createRenderer();
        renderer.render(<Board/>);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('board');
        result.type.should.equal('div');
        result.props.children[0].type.should.equal(ListContainer);
        result.props.children[0].props.title.should.equal('to do');
     
    });
    
     it('List creates list component',  function() {


        const renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        const result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');

        const img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);

        const p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
    });
});

describe('List component', function() {
   
});
//
//describe('Card component', function() {
//    it('Creates card component',  function() {
//
//
//        const renderer = TestUtils.createRenderer();
//        renderer.render(<Image url={url} description={description} />);
//        const result = renderer.getRenderOutput();
//        result.props.className.should.equal('gallery-image');
//
//        const img = result.props.children[0];
//        img.type.should.equal('img');
//        img.props.src.should.equal(url);
//        img.props.alt.should.equal(description);
//
//        const p = result.props.children[1];
//        p.type.should.equal('p');
//        p.props.children.should.equal(description);
//    });
//});

//Test components for ListContainer, List, Cards--Along with Board.js