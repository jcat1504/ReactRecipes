import React from 'react';


const BookLabel = ({title, author, genre}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{author}</p>
            <p>{genre}</p>
        </div>
    );
};

const BookComponent = () => {
    return (
        <div>
            <BookLabel title="1Q84" author="Murakami" genre="fiction" />
            <BookLabel title="The Alchemist" author="Coelo" genre="fantasy" />
        </div>
    )
}

//class

// class BookLabel extends React.Component{
//     render() {
//         return (
//             <div>
//                 <p>{this.props.title}</p>
//                 <p>{this.props.author}</p>
//                 <p>{this.props.genre}</p>
//             </div>
//         )
//     }
// }

// class BookComponent extends React.Component {
//     render() {
//         return (
//             <div>
//                 <BookLabel title="1Q84" author="Murakami" genre="fiction" />
//                 <BookLabel title="The Alchemist" author="Coelo" genre="fantasy" />
//             </div>
//         )
//     }
// }