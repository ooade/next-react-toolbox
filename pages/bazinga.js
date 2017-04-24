import Link from 'next/link'

import Header from '../components/header'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card'
import {Button} from 'react-toolbox/lib/button'

const dummyText = `
  Bazinga is a genus of rhizostome jellyfish with only one known species,
  Bazinga rieki, found off the central eastern coast of Australia.
  Forget it. Bazinga was used in the big bang theory series
  `;

export default() => (
  <div>
    <Header title='Bazinga' />
    <Card style={{width: '350px', marginTop: '12vh'}}>
      <CardTitle
        avatar="https://avatars3.githubusercontent.com/u/11811904?v=3&s=460"
        title="Ademola Adegbuyi"
        subtitle="Bazinga"
      />
      <CardMedia
        aspectRatio="wide"
        image="https://res.cloudinary.com/stackpie/image/upload/v1493054972/images/bazinga-the-big-bang-theory-33926500-600-600.jpg"
      />
      <CardTitle
        title="Bazinga"
        subtitle="Sheldon Cooper"
      />
      <CardText>{dummyText}</CardText>
      <CardActions>
        <Link prefetch href='/'><Button label='Home' accent/></Link>
        <Button label='More on bazinga' accent href='https://www.google.com/search?client=opera&q=bazinga' target='_blank'/>
      </CardActions>
    </Card>
  </div>
);
