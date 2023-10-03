import React from 'react';
import Dashboard from '../../components/Layout/Dashboard';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const mock = [
  {
    "question": "O que é o Spotify?",
    "answer": "O Spotify é um serviço de streaming de música que permite aos usuários ouvir música de qualquer lugar do mundo."
  },
  {
    "question": "Como faço para criar uma conta no Spotify?",
    "answer": "Para criar uma conta no Spotify, siga estas etapas:\n- Acesse o site do Spotify (www.spotify.com)\n- Clique em \"Criar uma conta\"\n- Preencha o formulário com suas informações pessoais e escolha um plano de assinatura\n- Clique em \"Criar conta\""
  },
  {
    "question": "Como faço para cancelar minha assinatura no Spotify?",
    "answer": "Para cancelar sua assinatura no Spotify, siga estas etapas:\n- Acesse o site do Spotify (www.spotify.com)\n- Clique em \"Entrar\" no canto superior direito da tela\n- Faça login com sua conta do Spotify\n- Clique em seu nome no canto superior direito da tela e selecione \"Configurações da conta\"\n- Clique em \"Cancelar assinatura\"\n- Siga as instruções na tela para concluir o processo de cancelamento"
  },
  {
    "question": "Como faço para ouvir música no Spotify?",
    "answer": "Para ouvir música no Spotify, siga estas etapas:\n- Acesse o site do Spotify (www.spotify.com)\n- Clique em \"Entrar\" no canto superior direito da tela\n- Faça login com sua conta do Spotify\n- Use a barra de pesquisa na parte superior da tela para pesquisar músicas, álbuns ou artistas\n- Clique em \"Reproduzir\" para ouvir a música selecionada"
  },
]

function Faq() {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#fff",
        padding: "20px",
        marginTop: "60px",
        height: "100vh",
        width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
        zIndex: "1",
        marginLeft: "379px",
        flexDirection: 'row',
      }}
    >
      <Box
        sx={{
          padding: "16px",

        }}
      >
        <Typography style={{ textAlign: 'center' }} variant="h4" gutterBottom>
          FAQs
        </Typography>

        <Typography style={{ marginBottom: '20px' }} variant="h5" gutterBottom>
          Perguntas Frequentes
        </Typography>

        {mock.map(
          ({ question, answer }) => {
            return (
              <Accordion
                sx={{
                  backgroundColor: "rgba(36, 36, 36, 0.9)",
                  color: "#fff"
                }}
              >
                {/* Cabeçalho do accordion = AccordionSummary */}
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="faq-content-1"
                  id="faq-header-1"
                >
                  <Typography variant="h6">{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>

            )
          }
        )}

      </Box>
    </Box>
  );
}

export default Dashboard(Faq);
