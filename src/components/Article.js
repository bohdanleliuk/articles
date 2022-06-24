import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

const Article = ({article}) => {

    return(
        <div style={{
            marginTop: 40
        }}>
            <Card>
                <Card.Body>
                    <Card.Title>{article.split(/[.!?]+/)[0]}</Card.Title>
                    <Card.Text>
                        {article}
                    </Card.Text>
                    <Link to="/">
                        <Button variant="outline-primary">Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Article;