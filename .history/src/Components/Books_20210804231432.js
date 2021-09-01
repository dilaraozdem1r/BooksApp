import React from 'react';



class Books extends React.Component {
    render() {
        return (
            
            <div className="card">
            <img src={this.props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card Title</h5>
                <p className="card-text">cardText</p>
                <p className="card-text"><small className="text-muted">updatedTime</small></p>
            </div>
        </div>
            
                );
    }
}

export default Books;