import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";

const ArticlesList = ({articles, refresh, setRefresh}) => {

    const articlesList = articles.map((article, index) => (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{article.split(/[.!?]+/)[0]}</Card.Title>
                    <Link to={`/article/${index}`}>
                        <Button variant="outline-primary" size="sm">Read more</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    ))

    const handleButton = () => {
        setRefresh(!refresh);
    }

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                gap: 20,
                marginTop: 40
            }}>
                {articlesList}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 40
            }}>
            <Button variant="primary" onClick={handleButton}>Refresh articles</Button>
            </div>
        </div>
    )
}

export default ArticlesList;