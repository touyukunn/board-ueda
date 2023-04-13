import React from "react";
import Box from "@mui/material/Box";
import { Button, Divider, Grid, Input, TextField, Typography } from "@mui/material";
import style from "./style/List.module.css"
import OutlinedCard from "./Cart";
function ListView() {
  return (
    <div>
      <Box className="list" sx={{ textAlign: "center" }}>
        <Box sx={{display:"flex", justifyContent:"right"}}>
        <TextField id="outlined-basic" label="検索内容を入力" variant="outlined" />
        <Button variant="contained" sx={{backgroundColor:"grey"}}>検索</Button>
        </Box>
        <Typography variant="h2" sx={{ color: "blue" }} >
          上田市道路状況投稿サイト
        </Typography>

        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{margin:'50px'}}
        >
            


        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ paddingRight: "10px" }} className={style.typography}>
            地域
          </Typography>
          <Input />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ paddingRight: "10px" }}>
            状況
          </Typography>
          <Input />
        </Box>
        <Box sx={{ margin: "30px" }}>
          <TextField
            id="fullWidth"
            label="投稿内容を入力してください"
            variant="outlined"
            rows={5}
            multiline
            sx={{ width: 500,
                maxWidth: '100%' }}
            size={"medium"}
          />
        </Box>
        <Box >
            <Button variant="contained" size="large" sx={{width:"300"}}>投稿</Button>
        </Box>
        </Grid>
        <Divider sx={{color:'blue', font:'10px'}}/>
<Box sx={{ alignItems: "center", justifyContent:"center" }}>

        <OutlinedCard/>
        <OutlinedCard/>
        <OutlinedCard/>
        <OutlinedCard/>
        <OutlinedCard/>
</Box>
      </Box>
    </div>
  );
}

export default ListView;
