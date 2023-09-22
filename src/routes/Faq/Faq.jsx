import React from 'react'
import Dashboard from '../../components/Layout/Dashboard'
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function Faq() {
  return (
    <Box
      sx={{
        backgroundColor: '#121212',
        color: '#fff',
        padding: '20px',
        marginTop: '60px',
        height: '100vh',
        width: { sm: `calc(100% - 310px)`, flexShrink: { sm: 0 } },
        zIndex: '1',
        marginLeft: '379px',
        flexDirection: 'row',
      }}>
      <Box
        sx={{
          padding: '16px',
        }}>
        <Typography style={{ textAlign: 'center' }} variant='h4' gutterBottom>
          FAQs
        </Typography>

        <Typography style={{ marginBottom: '20px' }} variant='h5' gutterBottom>
          Perguntas Frequentes
        </Typography>

        {/* Inicio do accordion  */}
        <Accordion
          sx={{
            backgroundColor: 'rgba(36, 36, 36, 0.9)',
            color: '#fff',
          }}>
          {/* Cabeçalho do accordion = AccordionSummary */}
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='faq-content-1' id='faq-header-1'>
            <Typography variant='h6'>Como faço para criar uma playlist?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para criar uma playlist, vá para a seção "Minhas Playlists" e clique em "Criar Playlist". Dê um nome à sua
              playlist e adicione músicas a ela.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#242424', color: '#fff' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='faq-content-2' id='faq-header-2'>
            <Typography variant='h6'>Posso baixar músicas para ouvir offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sim, você pode baixar músicas para ouvir offline. Basta encontrar a música que deseja baixar e clicar no
              ícone de download.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#242424', color: '#fff' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='faq-content-3' id='faq-header-3'>
            <Typography variant='h6'>Como assinar um plano Premium?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para assinar um plano Premium, acesse a página "Planos" em nosso site e escolha o plano que melhor atende
              às suas necessidades. Siga as etapas de pagamento para concluir a assinatura.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#242424', color: '#fff' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='faq-content-4' id='faq-header-4'>
            <Typography variant='h6'>Como cancelar minha assinatura Premium?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Para cancelar sua assinatura Premium, vá para as configurações da sua conta e clique na opção "Cancelar
              Assinatura". Siga as instruções para confirmar o cancelamento.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default Dashboard(Faq)
