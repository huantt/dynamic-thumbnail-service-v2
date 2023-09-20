import {Flex} from "../../../../../components/flex";
import {config} from "@/app/article/thumbnail/config";

export default async function Page({searchParams}: { searchParams: { avatar: string,title: string,author: string } }) {
    return  (
        <>
            <Flex style={{
                position:"absolute",
                top:0,
                background: config.background,
                width:config.width,
                height: config.height,
                padding: config.padding,
                flexDirection: "column",
                color: config.text_color
            }}>
                <Flex style={{alignItems: "center", flexDirection: "row"}}>
                    <Flex style={{flexDirection: "column", width: "70%", borderLeft: "solid 5px black", paddingLeft: config.space.l}}>
                        <div style={{
                            marginTop: config.space.l,
                            color: "black",
                            fontSize: config.fontSize.xl,
                            textTransform: "capitalize"
                            }}>{searchParams.title}
                        </div>
                        <span style={{
                            marginTop: config.space.l,
                            fontSize: config.fontSize.l,
                        }}>{searchParams.author}</span>
                    </Flex>
                    <Flex style={{width: "30%", flexDirection:"row-reverse"}}>
                        <img src={searchParams.avatar} alt="" style={{
                            width: config.avatar.size,
                            height: config.avatar.size,
                            borderRadius: config.borderRadius.m
                        }}/>
                    </Flex>
                </Flex>
                <Flex style={{
                    background: "#42b6f5",
                    position: "absolute",
                    height: config.space.xl,
                    width: config.width,
                    bottom: 0,
                    left: 0,
                }}></Flex>

            </Flex>
        </>
    )
}