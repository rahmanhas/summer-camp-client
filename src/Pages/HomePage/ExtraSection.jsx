import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ExtraSection = () => {
    return (
    <div>
        <h2 className='text-center text-6xl my-10 font-bold'>Students Review</h2>
        <div className='grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/adorable-teen-woman-keeping-forefinger-up-showing-attention-gesture-while-looking-camera_651396-3741.jpg?w=740&t=st=1686582686~exp=1686583286~hmac=a413e69c330d91b1bb2d9ba59c1a6013eec15a5140cd8174af9bb1ffd16f971a"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Clara
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Belly dancing at DanceFlow Academy was a captivating experience, with skilled instruction and a welcoming, empowering atmosphere.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/cheerful-fair-haired-caucasian-male-student-danim-shirt-browsing-internet-smartphone-having-rest-after-classes-looking-screen-smiling-modern-technologies-communication_176420-13630.jpg?w=1380&t=st=1686582685~exp=1686583285~hmac=95721f280f629f4a2f44a6ca00a0392ba663bb372b2278a8ffee35c1baba7178"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Stefan
          </Typography>
          <Typography variant="body2" color="text.secondary">
          DanceFlow Academy's Tango program transformed me, with expert guidance, community support, and a love for the art form
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-handsome-man-listens-music-with-earphones_176420-15616.jpg?w=1380&t=st=1686582693~exp=1686583293~hmac=fd2d31de301fb80c7b90027da45aa4b4747ab3c7194e6cf109e0cf9a9134b740"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Patrick
          </Typography>
          <Typography variant="body2" color="text.secondary">
          DanceFlow Academy's salsa program was an exhilarating journey, filled with vibrant music, energetic moves, and a fantastic social atmosphere
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-photo/young-woman-posing-phone-against-white-wall_176420-29304.jpg?w=1380&t=st=1686582710~exp=1686583310~hmac=22725d91641bce5052974738728afa8e42bcdb0056edf8872bf2e8f0d58b0512"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Natalia
          </Typography>
          <Typography variant="body2" color="text.secondary">
          DanceFlow Academy's Kathak program offered a mesmerizing exploration of rhythm, storytelling, and the rich cultural heritage of this classical dance form.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>

    </div>
    );
};

export default ExtraSection;