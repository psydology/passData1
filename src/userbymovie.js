import React , {Component} from 'react';

class UserMovie extends Component {
   
    render() {
       const {profiles , users , movies} = this.props;
        return (
            
            profiles.map(profile => {
                const userName = users[profile.userID].name;
                const favMovieName = movies[profile.favoriteMovieID].name;
    
                return (
               
                  <li key={profile.id}>
                 
                    <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
                  </li>
                );
              })
        )
    }
}

export default UserMovie;