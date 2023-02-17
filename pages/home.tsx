import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeaderInstitucional from '../components/ui/header/Header';
import homeLogoUfms from '../images/home-logo-ufms.png';
import homeFolhas from '../images/home-folhas.png';
import homeTucano from '../images/home-tucano.png';
import { Box, Button, Grid, Typography, Avatar, AvatarProps } from '@mui/material';
import NextLink from 'next/link';
import logoGeoIA from '../public/logo.ico';
import sobreAnimais from '../images/sobre-animais.png';
import infraestrutura from '../images/infraestrutura.png';
import alagadas from '../images/alagadas.png';
import queimadas from '../images/queimadas.png';
import vegetacao from '../images/vegetacao.png';

export default function Home() {
  return (
    <>
      <Grid sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <HeaderInstitucional />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
          }}
        >
          <Image src={homeTucano} alt="homeTucano" height={350} width={180} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            right: 0,
            top: 0,
          }}
        >
          <Image src={homeFolhas} alt="homeTucano" height={220} width={400} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: 'absolute',
            right: 60,
            bottom: 40,
          }}
        >
          <Image src={homeLogoUfms} alt="homeTucano" height={220} width={115} />
        </Box>
        <Grid
          item
          sx={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            textAlign: 'center',
            gap: 6,
            marginTop: 10,
          }}
        >
          <Grid item>
            <Typography variant="h1" sx={{ fontWeight: 600, color: 'white' }}>
              EcoGis
            </Typography>
            <Typography variant="h6" color={'secondary'} fontWeight={500}>
              Universidade Federal de Mato Grosso do Sul
            </Typography>
          </Grid>
          <Typography variant="h4" color={'white'} fontWeight={500}>
            Laboratório Geomática e IA
          </Typography>
          <Typography variant="h3" color={'secondary'} fontWeight={500}>
            <em>Mapeando a biodiversidade brasileira</em>
          </Typography>
          <Typography variant="body1" color={'secondary'} maxWidth={600}>
            Projeto de pesquisa e extensão do laboratório Geomática e Inteligência Artificial, da Universidade Federal de Mato Grosso do Sul, para monitoramento e gestão dos biomas do Brasil, por meio da ferramenta WebGis
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ flexDirection: 'column', height: '100vh', bgcolor: ' #0F1C3C' }}>
        <Grid
          item
          sx={{
            maxWidth: 900,
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            alignItems: 'center',
            gap: 2,
            marginTop: 5,
          }}
        >
          <Typography variant="h2" fontWeight={600} textAlign={'center'} marginTop={5}>
            WebGis
          </Typography>
          <Grid
            item
            sx={{
              marginTop: 4,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 5,
              maxHeight: 400,
            }}
          >
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Image src={queimadas} alt="Queimadas" width={400} height={400} />
              <Grid item>
                <Typography variant="subtitle1" sx={{color:'#FFFFFF'}}>Queimadas</Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  As queimadas são incêndios provocados intencionalmente ou não, que se propagam em áreas florestais, agrícolas ou urbanas, causando danos socioambientais. Elas ocorrem devido à ação humana, seja por desmatamento, limpeza de áreas agrícolas, queima de lixo ou por negligência.
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  Os efeitos das queimadas podem ser devastadores para o meio ambiente, causando a destruição da fauna e flora, a emissão de gases tóxicos na atmosfera e o aumento do aquecimento global. Além disso, as queimadas podem colocar em risco a saúde humana, causando problemas respiratórios e agravando doenças crônicas.
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  As medidas para prevenção e controle das queimadas incluem o desenvolvimento de campanhas de conscientização e educação ambiental da população, a fiscalização das áreas de risco, o monitoramento e o controle de atividades que possam causar incêndios. Além disso, é fundamental a investigação e punição dos responsáveis pelos incêndios, como forma de inibir futuras ocorrências e evitar danos socioambientais.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Image src={alagadas} alt="Áreas alagadas" width={400} height={400} />
              <Grid item>
                <Typography variant="subtitle1" sx={{color:'#FFFFFF'}}>Áreas Alagadas</Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  As áreas alagadas são ambientes aquáticos que possuem uma grande importância ecológica e econômica, as quais podem ser naturais ou artificiais, e temporárias ou permanentes, como rios, riachos, lagoas, baías e áreas pantanosas. 
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  Elas abrigam uma grande diversidade de espécies animais e vegetais, e fornecem importantes serviços ecossistêmicos, como a regulação do clima, a purificação da água, a manutenção da biodiversidade e a produção de alimentos e recursos naturais. E possuem papel fundamental na proteção contra enchentes, manutenção da qualidade da água, geração de energia, irrigação, pesca, turismo e em atividades importantes econômicas locais e ribeirinhas.
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  No entanto, as áreas alagadas também são vulneráveis a diversos tipos de impactos e as mudanças climáticas têm agravado a situação, com o aumento da frequência e intensidade de eventos extremos, como inundações e secas, que afetam as populações e os ecossistemas locais. Por isso, a gestão adequada das áreas alagadas é fundamental para a conservação da biodiversidade e para a garantia da segurança hídrica e alimentar das populações que dependem desses ecossistemas. Isso inclui a implementação de medidas de conservação, o monitoramento da qualidade da água, o planejamento adequado das atividades econômicas e a adoção de práticas sustentáveis que reduzam os impactos sobre esses ambientes.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Image src={infraestrutura} alt="Infraestrutura" width={400} height={400} />
              <Grid item>
                <Typography variant="subtitle1" sx={{color:'#FFFFFF'}}>Infraestrutura</Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  Infraestrutura refere-se a um conjunto de estruturas físicas, sociais e institucionais que formam a base para o desenvolvimento econômico e social de um país, região ou cidade. É composta por diferentes tipos de construções, sistemas e equipamentos que prestam serviços essenciais à sociedade, como transportes, energia, água e saneamento, telecomunicações, edificações e outras instalações.
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  A infraestrutura é fundamental para o funcionamento das cidades e para o desenvolvimento de atividades econômicas, como indústria, comércio, turismo, entre outras. Ela afeta diretamente a qualidade de vida da população e é essencial para garantir a segurança, saúde e bem-estar das pessoas. O investimento em infraestrutura é uma prioridade para muitos países, visando o desenvolvimento econômico e social. A falta de investimento ou a má qualidade da infraestrutura pode levar a problemas como congestionamentos, falta de energia, escassez de água, poluição, acidentes e outros riscos para a população.
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
             <Image src={vegetacao} alt="Vegetação" width={400} height={400} />
              <Grid item>
                <Typography variant="subtitle1" sx={{ marginTop: 1, fontSize: 17, color: '#FFFFFF' }}>Vegetação</Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  A vegetação refere-se ao conjunto de plantas, composta por diversas formas de vida vegetal,  e suas interações em um determinado ambiente, a qual é fundamental para a manutenção do equilíbrio ecológico, fornecendo alimentos, abrigo e proteção para a fauna local, além de ser responsável pela produção de oxigênio e pela absorção de dióxido de carbono da atmosfera, o que ajuda a regular o clima e a qualidade do ar.  
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  No entanto, a vegetação é afetada por atividades humanas, como desmatamento, queimadas, mineração, agricultura intensiva, as quais podem causar impactos negativos no ecossistema, incluindo a perda de biodiversidade, a erosão do solo, a diminuição da qualidade do ar e da água, além de outros problemas ambientais.
                </Typography>
                <Typography variant="body2" sx={{color:'#509CBF'}}>
                  Dessa forma, o monitoramento da vegetação é importante para o planejamento e a implementação de políticas de conservação e preservação ambiental. A tecnologia de sensoriamento remoto, por exemplo, permite a obtenção de informações precisas sobre a cobertura vegetal em uma determinada área, permitindo a identificação de áreas de risco e a elaboração de estratégias para a proteção da vegetação e da fauna associada.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Box></Box>
          <Button color={'primary'} sx={{ marginTop: 3, fontSize: 20, bgColor: '#FFF' }}>
            Webgis
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const Imagem = ({ src }: AvatarProps) => {
  return (
    <>
      <Avatar sx={{ width: 130, height: 130 }} src={src} />
    </>
  );
};
