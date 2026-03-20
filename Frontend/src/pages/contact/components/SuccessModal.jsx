import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessModal = ({ isOpen, onClose, formData }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-xl p-6 md:p-8 animate-scale-in">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-4">
            <Icon name="CheckCircle2" size={32} color="var(--color-success)" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-mono mb-2">Message Sent!</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6">
            Thank you for reaching out, {formData?.name}. I'll review your message and get back to you within 24-48 hours.
          </p>
          <div className="w-full p-4 bg-muted rounded-lg mb-6 text-left">
            <p className="text-xs md:text-sm text-muted-foreground mb-2">Confirmation sent to:</p>
            <p className="text-sm md:text-base font-medium break-all">{formData?.email}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <Button variant="outline" fullWidth onClick={onClose}>
              Send Another Message
            </Button>
            <Button variant="default" fullWidth onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
