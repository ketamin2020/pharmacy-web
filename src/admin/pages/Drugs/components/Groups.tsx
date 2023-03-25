import React, { useState, useEffect } from 'react'
import { TextField } from '@mui/material'
import { Edit } from '@material-ui/icons'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import { Delete } from '@material-ui/icons'
import { getGroups, deleteGroup, updateGroup, createGroup } from 'api/groups'
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))
export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const initState = {
  group_name: '',
  level: 0,
}
export const Groups = () => {
  const [open, setOpen] = useState(false)
  const [openFirstLevel, setOpenFirstLevel] = useState(false)
  const [openSecondLevel, setOpenSecondLevel] = useState(false)
  const [state, setState] = useState(initState)
  const [groups, setGroups] = useState([])
  const [expanded, setExpanded] = useState<string | false>(false)
  const [expandedFirst, setExpandedFirst] = useState<string | false>(false)
  const [expandedSecond, setExpandedSecond] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }
  const handleChangeFirstLevel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFirst(isExpanded ? panel : false)
  }
  const handleChangeSecondLevel = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedSecond(isExpanded ? panel : false)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    setState(initState)
  }

  const onChange = e => {
    const { name, value } = e.target
    setState(prev => ({ ...prev, [name]: value }))
  }

  const fetchGroupList = async () => {
    try {
      const res = await getGroups()
      setGroups(res)
    } catch (error) {
      console.log(error)
    }
  }
  const onCreateGroup = async () => {
    try {
      await createGroup(state)
      await fetchGroupList()
    } catch (error) {
      console.log(error)
    }
  }

  const onUpdateGroup = async () => {
    try {
      await updateGroup(state)
      await fetchGroupList()
    } catch (error) {
      console.log(error)
    }
  }

  const onDeleteGroup = async (id, level, parent_id) => {
    try {
      await deleteGroup(id, level, parent_id)
      await fetchGroupList()
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchGroupList()
  }, [])

  return (
    <div>
      <Button
        variant='outlined'
        onClick={() => {
          setState(prev => ({ ...prev, level: 0 }))
          handleClickOpen()
        }}
      >
        Add group
      </Button>
      {groups?.map((group, i) => (
        <Accordion key={group.id} expanded={expanded === group.id} onChange={handleChange(group.id)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
            <Typography sx={{ width: '90%', flexShrink: 0 }}>{group.group_name}</Typography>
            <Typography
              onClick={() => {
                setState({ ...group, level: 0 })
                handleClickOpen()
              }}
              sx={{ color: 'text.secondary' }}
            >
              <Edit />
            </Typography>
            <Typography onClick={() => onDeleteGroup(group.id, 0, group.id)} sx={{ color: 'text.secondary' }}>
              <Delete />
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button
              variant='outlined'
              onClick={() => {
                setState(prev => ({ ...prev, level: 1, parent_id: group.id }))
                handleClickOpen()
              }}
            >
              Add first level group
            </Button>
            {group?.children?.map((group, idx) => (
              <Accordion
                key={group.id}
                expanded={expandedFirst === group.id}
                onChange={handleChangeFirstLevel(group.id)}
              >
                <AccordionSummary
                  style={{ justifyContent: 'space-between' }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1bh-content'
                  id='panel1bh-header'
                >
                  <Typography sx={{ width: '90%', flexShrink: 0 }}>{group.group_name}</Typography>
                  <Typography
                    onClick={() => {
                      setState({ ...group, level: 1 })
                      handleClickOpen()
                    }}
                    sx={{ color: 'text.secondary' }}
                  >
                    <Edit />
                  </Typography>
                  <Typography
                    onClick={() => onDeleteGroup(group.id, 1, group.parent_id)}
                    sx={{ color: 'text.secondary' }}
                  >
                    <Delete />
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    variant='outlined'
                    onClick={() => {
                      setState(prev => ({ ...prev, level: 2, parent_id: group.parent_id, child_id: group.id }))
                      handleClickOpen()
                    }}
                  >
                    Add second level group
                  </Button>

                  {group?.children?.map(group => (
                    <Accordion
                      key={group.id}
                      expanded={expandedSecond === group.id}
                      onChange={handleChangeSecondLevel(group.id)}
                    >
                      <AccordionSummary
                        style={{ justifyContent: 'space-between' }}
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1bh-content'
                        id='panel1bh-header'
                      >
                        <Typography sx={{ width: '90%', flexShrink: 0 }}>{group.group_name}</Typography>
                        {/* <Typography
                          onClick={() => {
                            setState({ ...group, level: 2 })
                            handleClickOpen()
                          }}
                          sx={{ color: 'text.secondary' }}
                        >
                          <Edit />
                        </Typography> */}
                        <Typography
                          onClick={() => onDeleteGroup(group.id, 2, group.parent_id)}
                          sx={{ color: 'text.secondary' }}
                        >
                          <Delete />
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>{/* <Typography>{group.group_name}</Typography> */}</AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}

      <BootstrapDialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={open}>
        <BootstrapDialogTitle id='customized-dialog-title' onClose={handleClose}>
          Create new groupe
        </BootstrapDialogTitle>
        <DialogContent style={{ width: '400px' }} dividers>
          <TextField
            onChange={onChange}
            name='group_name'
            style={{ marginBottom: '20px' }}
            fullWidth
            placeholder='Type...'
            label='Group name'
            required
            value={state.group_name}
          />
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              state?.id ? onUpdateGroup() : onCreateGroup()
              handleClose()
            }}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}
function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
}
